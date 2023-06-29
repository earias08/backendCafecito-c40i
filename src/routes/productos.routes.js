import { Router } from 'express';
import {
  borrarProducto,
  crearProducto,
  obtenerProductos,
} from '../controllers/productos.controllers';

const router = Router();

// app.get('/productos', (req, res) => {
//   res.send('Esto fue una peticion get')
//   })

router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').delete(borrarProducto);

export default router;
