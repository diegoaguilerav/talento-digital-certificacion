<template>
    <div>
        <NavBar/>
        <div class="d-flex flex-column flex-md-row">
            <div class="col-12 col-md-2 my-2 p-0">
            <AsideBar/>
            </div>
            <div class="col-12 col-md-10">
                <div class="col-10">
                    <div>
                        <ul class="nav nav-pills mb-3 mt-2" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-general-tab" data-toggle="pill" href="#pills-general" role="tab" aria-controls="pills-general" aria-selected="true">Nueva Transferencia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-datos-cliente-tab" data-toggle="pill" href="#pills-datos-cliente" role="tab" aria-controls="pills-datos-cliente" aria-selected="false">Cartola Transferencia</a>
                        </li>
                        </ul>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active col-10" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
                            <div>
                                <h5 class="py-2"><router-link class="text-dark" to="homeprivado"> Home </router-link> >> <router-link class="text-dark" to="transferencias"> Transferencias </router-link> >> Nueva</h5>
                            </div>
                            <form action="">
                            <h3>Nueva Transferencia</h3>
                            <div class="col-12 mt-5">
                                <h5>Cuenta de Origen</h5>
                                <div class="d-flex justify-content-around mb-4 mt-2">
                                    <div><input type="radio" id="cuenta_corriente" name="c_origen" value="cuenta_corriente"> <label for="cuenta_corriente">Cuenta Corriente</label></div>
                                    <div><input type="radio" id="linea_credito" name="c_origen" value="linea_credito"> <label for="linea_credito">Línea de Crédito</label></div>
                                    <div><input type="radio" id="tarjeta_credito" name="c_origen" value="tarjeta_credito"> <label for="tarjeta_credito">Tarjeta de Crédito</label></div>
                                </div>
                            </div>
                            <div class="col-12">
                                <h5>Cuenta de Destino</h5>
                                <div class="d-flex">
                                    <div class="col-4">
                                        <div class="separacion">Banco</div>
                                        <div class="separacion">N° Cuenta</div>
                                        <div class="separacion">RUT</div>
                                        <div class="separacion">Nombre</div>
                                        <div class="separacion">Monto</div>
                                        <div class="separacion">Email</div>
                                        <div class="separacion">Mensaje</div>
                                    </div>
                                    <div class="col-6">
                                        <div>
                                            <select class="custom-select" id="inputGroupSelect02">
                                            <option selected>Seleccione...</option>
                                            <option v-for="banco of bancos.bancos" :key="banco.key">{{banco.nombre}}</option>
                                        </select>
                                        </div>
                                        <div class="py-2"><input class="w-100" type="text" required></div>
                                        <div class="py-2"><input class="w-100" type="text" required></div>
                                        <div class="py-2"><input class="w-100" type="text" required></div>
                                        <div class="py-2"><input class="w-100" type="text" required></div>
                                        <div class="py-2"><input class="w-100" type="text" required></div>
                                        <div class="py-2"><textarea class="w-100" cols="30" rows="3" required></textarea></div>
                                        <div class="py-2"><button class="btn btn-md btn-primary btn-block">Transferir</button></div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div class="tab-pane fade col-10" id="pills-datos-cliente" role="tabpanel" aria-labelledby="pills-datos-cliente-tab">
                            <div>
                                <h5 class="py-2"><router-link class="text-dark" to="homeprivado"> Home </router-link> >> <router-link class="text-dark" to="transferencias"> Transferencias </router-link> >> Cartola</h5>
                            </div>
                            <h3>Cartola Transferencias</h3>
                            <div class="d-flex col-12 my-3">
                                <div class="col-4">
                                    <p>Fecha Desde</p>
                                    <date-picker v-model="filtro.fechaInicio" format="DD-MM-YYYY" lang="es" valueType="format"></date-picker>
                                </div>
                                <div class="col-4">
                                    <p>Fecha Hasta</p>
                                    <date-picker v-model="filtro.fechaFin" format="DD-MM-YYYY" lang="es" valueType="format"></date-picker>
                                </div>
                                <div class="d-flex align-items-end justify-content-center col-4">
                                    <div class="col-12">
                                        <button v-on:click="buscar()" class="btn btn-md btn-primary btn-block">Buscar</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">N°Trx</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Destinatario</th>
                                        <th scope="col">Monto</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="cartola in cartolas.transferencias" :key="cartola.key">
                                        <td scope="row">{{ cartola.num_trx }}</td>
                                        <td>{{ formato_fecha(cartola. fecha) }}</td>
                                        <td>{{ cartola.destinatario }}</td>
                                        <td>{{ cartola.monto }}</td>
                                        <td>{{ cartola.estado }}</td>
                                        <td v-if="cartola.estado == 'Realizado'"><i class="fas fa-check-circle text-success"></i></td>
                                        <td v-else><i class="fas fa-times-circle text-danger"></i></td>
                                        <td><button type="button" class="btn btn-outline-primary btn-detalle">Ver Detalle</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/es';
import NavBar from '@/components/NavBarPrivado.vue'
import AsideBar from '@/components/AsideBar.vue'

export default {
  name: "Transferencias",
  components: {
      AsideBar,
      NavBar,
      DatePicker
  },
  data() {
    return{
    }
  },
  created() {
      this.$store.dispatch('actionGetBancos')
      this.$store.dispatch('actionGetCartola')
  },
  methods:{
    formato_fecha(cadena) {
        let fecha_arreglo = cadena.split('-');
        let dia = fecha_arreglo[2].split('T');
        return dia[0]+'-'+fecha_arreglo[1]+'-'+fecha_arreglo[0] 
    },
    buscar(){
      console.log('Fecha inicio: ' + this.filtro.fechaInicio + ', Fecha Final: ' + this.filtro.fechaFin)
    },
  },
  computed: {
    ...mapState(['cartolas', 'bancos', 'filtro'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-detalle{
  background-color: skyblue;
  padding: 1px 6px;
}
.separacion{
    height: 46px;
}
table thead th{
  border: 0;
}
</style>
