availdable routes:

HEROS
| route                                                 | method |        description         |
| :---------------------------------------------------- | :----: | :------------------------: |
| http://localhost:4000/heros                           |  GET   |       get all heros        |
| http://localhost:4000/heros/pagination?limit=1&skip=1 |  GET   | get heros with pagination  |
| http://localhost:4000/heros/create                    |  POST  |      create one hero       |
| http://localhost:4000/heros/:id                       |  GET   |  get one hero by hero id   |
| http://localhost:4000/heros/delete                    | DELETE | delete one hero by hero id |
| http://localhost:4000/heros/update                    |  PUT   |      update one hero       |


HERO IMAGE 
| route                                         | method |          description           |
| :-------------------------------------------- | :----: | :----------------------------: |
| http://localhost:4000/hero-image/:id          |  GET   |   get one image by image id    |
| http://localhost:4000/hero-image/hero/:heroId |  GET   | get all hero images by hero id |
| http://localhost:4000/hero-image/add/:heroId  |  PUT   |         add hero image         |
