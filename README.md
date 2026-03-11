
# Movie Library

Uma biblioteca para gerenciar e consultar informações de filmes usando a API TMDB.

## Instalação

```bash
npm install
```

## Uso

```javascript
const movieLib = require('./index.js');

// Exemplo de uso
movieLib.searchMovie('Inception');
```

## Recursos

- Buscar filmes por título
- Obter detalhes de filmes
- Listar filmes populares
- Gerenciar lista de favoritos

## Requisitos

- Node.js 14+
- API Key da TMDB

## Configuração

1. Obtenha sua chave de API em [themoviedb.org](https://www.themoviedb.org/settings/api)
2. Crie um arquivo `.env` com sua chave:
    ```
    TMDB_API_KEY=sua_chave_aqui
    ```

## Licença

MIT
