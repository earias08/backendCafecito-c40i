import Producto from '../models/producto';

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al buscar los productos',
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    // console.log(req.body);
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      mensaje: 'El producto se creo correctamente',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al crear el producto',
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
   //pedir a la BD borrar un producto
   console.log(req.params.id);
   await Producto.findByIdAndDelete(req.params.id);
   res.status(200).json({
    mensaje: 'El producto fue eliminado correctamente'
   })

  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'No se pudo eliminar el producto',
    });
  }
};
