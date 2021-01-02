export default function Story(story) {
  // console.log(story);
  return `
  <div class="story">
    <div>
      <span class="gray">${story.index}</span>
      <span class="upvote">▲</span>
      <a href="${story.url}" target="_blank">${story.title}</a>
      <span>(${story.domain})</span>
    </div>
    <div>
      <div class="gray">
        ${story.points} points by ${story.user} ${story.time_ago} | 
        <a href="#/item?id=${story.id} target="_blank">
          ${story.comments_count} comments
        </a>
        |
        <span class="favorite">
        <img class="heart" src="https://img.icons8.com/plumpy/24/000000/hearts.png"/>
          Add To Favorites
        </span>
      </div>
    </div>
  </div>
  `;
}
