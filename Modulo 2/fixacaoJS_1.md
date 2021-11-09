```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let comissaoPercentual = valorTotalVendas * 0.05
 let comissaoSalario = qtdeCarrosVendidos * 100 + comissaoPercentual + 2000
 return comissaoSalario
 }