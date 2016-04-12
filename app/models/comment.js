export default {
  tableName: `comments`,

  post() {
    return this.belongsTo(`post`);
  },
};
