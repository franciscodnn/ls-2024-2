import numpy as np
import matplotlib.pyplot as plt


mu = 0  
sigma = 1  
size = 2000

dados = np.random.normal(loc=mu, scale=sigma, size=size)


# Plotando o histograma
plt.hist(dados, bins=30, density=True,  alpha=0.6, color='y')

# Adicionando uma linha para a função de densidade de probabilidade (pdf)
xmin, xmax = plt.xlim()  # limites do eixo X
x = np.linspace(xmin, xmax, 100)  # criando valores para o eixo X
p = 1/(sigma * np.sqrt(2 * np.pi)) * np.exp(-0.5 * ((x - mu) / sigma) ** 2)  # PDF da normal
plt.plot(x, p, 'k', linewidth=2)  # plotando a linha da distribuição normal

# Títulos e rótulos
plt.title('Distribuição Normal')
plt.xlabel('Valor')
plt.ylabel('Densidade de Probabilidade')

# Exibindo o gráfico
plt.show()


