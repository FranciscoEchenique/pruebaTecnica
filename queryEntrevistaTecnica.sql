USE [PruebaTecnica]
GO
CREATE FUNCTION getTopVentas()
returns table 
as return 
	SELECT TOP 1 Fecha_venta, COUNT(ID_VENTA) AS TotalVentas FROM ventas
	GROUP BY Fecha_venta
	ORDER BY TotalVentas DESC
GO