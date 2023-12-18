<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h1>Sociedad General de Cirujanos del Peru</h1>
                    <h2>FICHA DE INSCRIPCION</h2>
                    <div class="mb-3">
                        <label class="form-label">ingresar apellido</label>
                        <input v-model="ficha.apellido" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">nombre</label>
                        <input v-model="ficha.nombre" type="text" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">CMP</label>
                                <input v-model="ficha.cmp" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">RNE</label>
                                <input v-model="ficha.rne" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">DNI/CIP</label>
                                <input v-model="ficha.dni" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">profesion</label>
                                <input v-model="ficha.profesion" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Domicilio</label>
                            <input v-model="ficha.domicilio" type="text" class="form-control">
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label class="form-label">telefono</label>
                                    <input v-model="ficha.telefono" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label class="form-label">celular</label>
                                    <input v-model="ficha.celular" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label class="form-label">email</label>
                                    <input v-model="ficha.Email" type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
                    <RouterLink class="btn btn-light" to="/curso_listar">Cancelar</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
            ficha: {
                apellido: '',
                nombre: '',
                cmp: '',
                rne: '',
                dni: '',
                profesion: '',
                domicilio: '',
                telefono: '',
                celular: '',
                Email: '',

            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'ficha'));
                const docRef = await addDoc(q, this.ficha);
                this.$router.push({ name: 'ficha_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    }
})
</script>