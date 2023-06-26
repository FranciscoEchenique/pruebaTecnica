using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModeloNegocios
{
    public class Ventas
    {
        public static List<DataLayer.ventas> GetVentas()
        {
            using(DataLayer.PruebaTecnicaEntities db = new DataLayer.PruebaTecnicaEntities())
            {
                return db.ventas.ToList();
            }
        }
    }
}
