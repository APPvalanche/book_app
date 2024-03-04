export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Book Image',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Book Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
}
