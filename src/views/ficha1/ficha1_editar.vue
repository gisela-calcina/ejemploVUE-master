<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h1 class="text-center">FICHA DE DATOS DE JUGADOR</h1>
                    <h2 class="text-center">C.B BOSCOS HUESA</h2>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">ingresar nombre</label>
                                <input v-model="ficha1.nombre" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">nombre del padre</label>
                                <input v-model="ficha1.padre" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">ingresar apellidos</label>
                                <input v-model="ficha1.apellidos" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">nombre de la madre</label>
                                <input v-model="ficha1.madre" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="mb-2">
                                <label class="form-label">ficha de nacimiento</label>
                                <input v-model="ficha1.nacimiento" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">DNI</label>
                                <input v-model="ficha1.dni" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">altura</label>
                                <input v-model="ficha1.altura" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">peso</label>
                                <input v-model="ficha1.peso" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">envergadura</label>
                                <input v-model="ficha1.envergadura" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">domicilio</label>
                                <input v-model="ficha1.domicilio" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">C.P.</label>
                                <input v-model="ficha1.cp" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">poblacion</label>
                                <input v-model="ficha1.poblacion" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">telefono fijo</label>
                                <input v-model="ficha1.telefono" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">movil</label>
                                <input v-model="ficha1.movil" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">e-mail</label>
                                <input v-model="ficha1.email" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">e-mail padre</label>
                                <input v-model="ficha1.email" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">e-mail madre</label>
                                <input v-model="ficha1.email" type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/ficha1_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs,getDoc, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            ficha1: {
                nombre: '',
                padre: '',
                apellidos: '',
                madre: '',
                nacimiento: '',
                dni: '',
                altura: '',
                peso: '',
                envergadura: '',
                domicilio: '',
                cp: '',
                poblacion: '',
                telefono: '',
                movil: '',
                email: '',
                padre: '',
                madre: '',
            },
        }
    },
    methods: {
        async getUrls() {
            try {
                const q = doc(db, "ficha1", this.id);
                const respuesta = await getDoc(q);
                this.ficha1=respuesta.data()
            } catch (error) {
                console.log(error);
            }
        },
        async guardar() {
            try {
                const q = doc(db, 'ficha1',this.id);
                const docRef = await updateDoc(q,this.ficha1);
                this.$router.push({ name: 'ficha1_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getUrls()
    }
})
</script>