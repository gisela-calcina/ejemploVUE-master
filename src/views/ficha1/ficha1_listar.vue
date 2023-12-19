<template>
    <div class="row">
        <div class="col-md-12">
            <RouterLink class="btn btn-primary" to="/ficha1_crear">agregar ficha1</RouterLink>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">nombre</th>
                                <th scope="col">apellidos</th>
                                <th scope="col">dni</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in ficha1">
                                <td>{{ data.nombre }}</td>
                                <td>{{ data.apellidos}}</td>
                                <td>{{ data.dni}}</td>
                                <td>
                                    <RouterLink class="btn btn-success" :to="'/ficha1_editar/' + data.id">Editar</RouterLink>
                                    <button class="btn btn-danger" @click="eliminar(data.id)">Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { collection, getDocs, query, where,deleteDoc,doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            loadingDoc: false,
            ficha1: []
        }
    },

    methods: {
        async getUrls() {
            try {
                this.ficha1= []
                const q = query(
                    collection(db, "ficha1")
                );
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id);
                    this.ficha1.push({
                        nombre: doc.data().nombre,
                        apellidos: doc.data().apellidos,
                        dni: doc.data().dni,
                        id: doc.id,
                        // ...doc.data()
                    });
                });
                // console.log(this.curso);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminar(id) {
            try {
                const q = doc(db, "ficha1", id);
                const docRef = await deleteDoc(q);
                this.getUrls()
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getUrls()
    }
})
</script>