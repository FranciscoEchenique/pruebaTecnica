<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ProyectoASP._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

   <%-- <h1>Ventas:</h1>--%>

   <%-- <asp:GridView ID="GVventas" runat="server" CssClass="table table-bordered" AutoGenerateColumns="false">
        <Columns>
            <asp:BoundField DataField="Fecha_venta" HeaderText="Fecha de venta" />
            <asp:BoundField DataField="Dni_cliente" HeaderText="DNI del cliente" />
            <asp:BoundField DataField="Nombre_empleado" HeaderText="Nombre del empleado" />
            <asp:BoundField DataField="Nombre_cliente" HeaderText="Nombre del cliente" />
            <asp:BoundField DataField="Importe_total" HeaderText="Importe total" />
            <asp:BoundField DataField="Direccion_envio_cliente" HeaderText="Dirección de envío del cliente" />
            <asp:BoundField DataField="Direccion_sucursal_venta" HeaderText="Dirección de la sucursal de venta" />
            <asp:BoundField DataField="Nombre_sucursal_venta" HeaderText="Nombre de la sucursal de venta" />
            <asp:BoundField DataField="Producto" HeaderText="Producto" />
            <asp:BoundField DataField="Cantidad" HeaderText="Cantidad" />
        </Columns>
    </asp:GridView>--%>

    <div style="margin-top: 40px;">
        <h3>Fecha con más ventas: 
        <asp:Label ID="lblFecha" runat="server"></asp:Label></h3>
    </div>

</asp:Content>
