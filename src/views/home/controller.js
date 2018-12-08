/**
 * Create a Controller for Route Table
 *
 * @param { Path Name } name
 * @param { Route Path } path
 * @param { Template File } view
 */
function createController (name, path, view) {
  return {
    path: path,
    name: name,
    component: function () {
      return import('./' + view)
    }
  }
}

export default [
  createController('home', '/', 'index')
]
