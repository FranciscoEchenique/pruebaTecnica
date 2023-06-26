using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModeloNegocios
{
    public class TopVentas
    {
        public static DateTime GetTopVentas()
        {
            using (DataLayer.PruebaTecnicaEntities db = new DataLayer.PruebaTecnicaEntities())
            {
                return (DateTime)db.getTopVentas().FirstOrDefault().Fecha_venta;
            }
        }
    }
}
