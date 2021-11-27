# Your-Road

Website about travel:

Travel diary, where you can

<ul>
<li>Planification</li>
</ul>

| Route                          | HTTP Verb | Description        |
| ------------------------------ | --------- | ------------------ |
| `/`                            | GET       | Index              |
| `/auth/signup`                 | GET       | Sign up            |
| `/auth/signup`                 | POST      | Sign up            |
| `/auth/login`                  | GET       | Login              |
| `/auth/login`                  | POST      | Login              |
| `/auth/logout`                 | GET       | Logout             |
| `/profile/edit/:id`            | GET       | user-profile       |
| `/profile/edit/:id`            | POST      | edit-profile       |
| `/profile/:id/details`         | GET       | list user travel   |
| `/place/collection`            | GET       | read place         |
| `/place/collection`            | POST      | create colecciones |
| `/place/marker/edit/:place_id` | GET       | Edit travel        |
| `place/marker/edit/:place_id`  | POST      | New point          |
| `/place/marker/delete/:id`     | GET       | Delete Travel      |
| `/place/api`                   | GET       | Map                |
| `/user/profile/edit/:id`       | GET       | Session            |
| `/point/details/edit/:id`      | GET       | Details            |
| `/point/profile/edit/:id`      | POST      | Edit Details       |
| `/point/details/delete/:id`    | GET       | Delete Points      |
