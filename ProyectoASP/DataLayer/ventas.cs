//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class ventas
    {
        public int ID_VENTA { get; set; }
        public Nullable<System.DateTime> Fecha_venta { get; set; }
        public string Dni_cliente { get; set; }
        public string Nombre_empleado { get; set; }
        public string Nombre_cliente { get; set; }
        public Nullable<decimal> Importe_total { get; set; }
        public string Direccion_envio_cliente { get; set; }
        public string Direccion_sucursal_venta { get; set; }
        public string Nombre_sucursal_venta { get; set; }
        public string Producto { get; set; }
        public Nullable<int> Cantidad { get; set; }
    }
}
