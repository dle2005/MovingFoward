function loadStories() {
  require('../App/stories/Button.stories');
  require('../App/stories/TextInput.stories');
  require('../App/stories/API.stories');
}

const stories = [
  '../App/stories/Button.stories',
  '../App/stories/TextInput.stories',
  '../App/stories/API.stories'
];

module.exports = {
  loadStories,
  stories,
};
