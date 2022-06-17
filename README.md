# Como rodar o Projeto

```
npm install
```

```
npm run start
```

Caso queira utilizar o aplicativo utilizando a pasta de build do projeto
será necessário rodá-lo dentro de de um servidor. Um exemplo pode ser o Live Server,
(extensão do VSCode), seguindo os seguintes passos:

- Adição da extensão ao VSCode

![Extensão](https://miro.medium.com/max/1400/1*5Ls-Y7HNYtg8xmZwtgEO1g.png)

- Abrir arquivo index.html (/build) usando a extensão Live Server

![How To](https://uploaddeimagens.com.br/images/003/901/337/full/aa.png?1655008080)

# Como entender os códigos do Projeto?

Utilizando algum app de desenvolvimento, por exemplo o VSCode, filtre pela seguinte string '/\*' e você encontrará todos os pontos mais importantes do programa, que estão comentados de forma que será possível compreender qual a funcionalidade de cada parte.

O programa está dividido da seguinte forma:

## Definição

```
src/Components/Definition/*
src/Redux/App/*
src/Redux/Program/*
```

São as partes responsáveis pela definição da máquina, como adição de registradores e seleção de funcionalidades para cada um, assim como a geração da definição da máquina teórica.

## Programação

```
src/Components/Programation/*
src/Redux/Programation/*
```

São as partes responsáveis pela programação da máquina, como adição de linhas, definição das linhas, definição de qual comparador/função será chamada e definição de qual linha será chamada após.

## Execução do programa escrito

```
src/Components/CodeRunner/*
src/Redux/Code/*
```

São as partes responsáveis pela execução do programa escrito para a máquina, como definição das variáveis de entrada da máquinha, geração do código que será rodado e a execução de fato do programa. Que ao fim de sua execução mostra a computação de cada linha rodada no código e os valores finais de saída da máquina.
