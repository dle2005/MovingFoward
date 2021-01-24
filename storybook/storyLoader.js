function loadStories() {
  require('../App/stories/API.stories');
  require('../App/stories/Button.stories');
  require('../App/stories/Header.stories');
  require('../App/stories/Modal.stories');
  require('../App/stories/Text.stories');
  require('../App/stories/TextInput.stories');
}

const stories = [
  '../App/stories/API.stories',
  '../App/stories/Button.stories',
  '../App/stories/Header.stories',
  '../App/stories/Modal.stories',
  '../App/stories/Text.stories',
  '../App/stories/TextInput.stories',
];

module.exports = {
  loadStories,
  stories,
};
