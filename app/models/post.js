export default {
  tableName: `posts`,

  comments() {
    return this.hasMany(`comment`);
  },
};
