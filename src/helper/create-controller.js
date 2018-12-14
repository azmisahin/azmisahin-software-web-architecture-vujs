/**
 * Create a Controller for Route Table
 *
 * @param { Path Name } name
 * @param { Route Path } path
 * @param { Template File } view
 *
 * @public
 */
module.exports.CreateController = function createController (name, path, view) {
  return {
    path: path,
    name: name,
    component: () => import('@/views/' + name + '/' + view)
  }
}
