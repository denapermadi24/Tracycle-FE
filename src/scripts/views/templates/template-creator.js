import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restoran-item">
    <a href="/#/detail/${restaurant.id}">
      <img class="restoran-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="restoran-item__content">
        <p class="restoran-item__city">${restaurant.city}  <span class="restoran-item__rating" aria-label="rating restoran ${restaurant.rating}"><i class="fa fa-star"></i>${restaurant.rating}</span>
        </p>
        <h3 class="restoran-item__name">${restaurant.name}</h3>
        <h4 class="restoran-item__description">${restaurant.description}</h4>
      </div>
    </a>
  </article>
`;

const createLikeButtonTemplate = () => (`
  <button aria-label="like this restaurants" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`);

const createLikedButtonTemplate = () => (`
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`);

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail__wrapper">
    <div class="restaurant-detail__info">
      <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      <p class="restaurant-detail__about">
        ${restaurant.categories.map((cates) => `
          <span class="restaurant-detail__category">${cates.name}</span>
        `).join('')}
      </p>
      <p class="restoran-detail__location"><h4> Location </h4>${restaurant.address}, ${restaurant.city}</p>
      <img class="restaurant-detail__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <p class="restoran-detail__description">${restaurant.description}</p>
    </div>
    
    <div class="restaurant__ham">
        <h3>Menu List</h3>
    </div>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
        <h4>Makanan</h4>
        <ul class="restaurant-detail__foods">
          ${restaurant.menus.foods.map((food) => `
            <li>${food.name}</a></li>
          `).join('')}
        </ul>
      </div>
      <div class="drinks">
        <h4>Minuman</h4>
        <ul class="restaurant-detail__drinks">
          ${restaurant.menus.drinks.map((drink) => `
            <li>${drink.name}</li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="restaurant__ham">
        <h3>Review Customer</h3>
    </div>
    <div class="restaurant-detail__review">
      ${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
          <div class="customer-name">
            <h4>${customer.name}</h4>
            <span class="customer-review-date">${customer.date}</span>
          </div>
          <p class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
