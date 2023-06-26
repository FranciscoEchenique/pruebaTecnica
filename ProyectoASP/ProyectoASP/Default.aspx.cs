using ModeloNegocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProyectoASP
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            lblFecha.Text = TopVentas.GetTopVentas().ToString();
            //GVventas.DataSource = Ventas.GetVentas();
            //GVventas.DataBind();
        }
    }
}