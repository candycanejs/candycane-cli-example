import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper/dist/decorator';

@map('post')
export default class PostsIndex extends Action {
  /**
   * Simplified promise aware hook for finding data
   * @return {any} POJO or Promise of data
   */
  data() {
    return this.app.make(`store`).model(`post`).fetchAll({
        withRelated: ['comments'],
      }).then((data) => {
        return data;
      }, (err) => {
        console.log(err);
      });
  }
}
