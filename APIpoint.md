# API POINTS



## ARTICLE
### Menampilkan seluruh article
```
GET: /article

response:
[
  {
    "id"        : "",
    "title"     : "",
    "author"    : "",
    "markdown"  : "",
    "thumbnail" : "",
    "content"   : ""
  },
  {
    ...
  }
]
```
### Menampilkan article berdasarkan ```id```
```
GET: /article/[id]

response:
{
  "id"        : "",
  "title"     : "",
  "author"    : "",
  "markdown"  : "",
  "thumbnail" : "",
  "content"   : ""
}
```
### Menambahkan article
```
POST: /article

data:
{
  "title"     : "",
  "author"    : "",
  "markdown"  : "",
  "thumbnail" : "",
  "content"   : ""
}

response:
true    //if true
false   //if false
```
### Mengubah article
```
PUT: /article

data:
{
  "title"     : "",
  "author"    : "",
  "markdown"  : "",
  "thumbnail" : "",
  "content"   : ""
}

response:
true    //if true
false   //if false
```
### Menghapus article
```
DELETE: /article

response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/jordanbramada/JordanTekweb2022/main/img/dbdesign.png)
