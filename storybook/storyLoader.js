function loadStories() {
  require('../App/stories/Button.stories');
  require('../App/stories/TextInput.stories');
}

const stories = [
  '../App/stories/Button.stories',
  '../App/stories/TextInput.stories'
];

module.exports = {
  loadStories,
  stories,
};
