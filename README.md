# Miku Fan Hub

Site dedicado aos fãs da Hatsune Miku e do universo Vocaloid.

## Como executar

1. Instalar dependências:
   `npm install`
2. Executar em desenvolvimento:
   `npm run dev`

## 📰 Adicionando Novas Notícias

Para adicionar novas notícias ao site:

1. Abra o arquivo `pages/NoticiasPage.tsx`
2. Localize o array `newsData`
3. Adicione um novo objeto seguindo a estrutura:

```typescript
{
  id: [próximo_id_disponível],
  title: "Título da notícia",
  summary: "Resumo da notícia em português",
  date: "DD Mmm YYYY",
  category: "Categoria", // Tecnologia, Eventos, Música, Cultura, Comunidade, Arte
  isHot: true/false, // Para notícias em destaque
  gradient: "from-cor1 to-cor2" // Gradiente baseado na categoria
}
```

### Categorias Disponíveis:
- **Tecnologia**: Novidades sobre software Vocaloid, IA, etc.
- **Eventos**: Concertos, exposições, turnês
- **Música**: Lançamentos, colaborações, álbuns
- **Cultura**: Impacto cultural, documentários, mídia
- **Comunidade**: Crescimento da base de fãs, marcos da comunidade
- **Arte**: Fanart, designs, colaborações visuais