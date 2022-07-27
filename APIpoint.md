# API POINTS



## ARTICLE
### Menampilkan seluruh article
```
GET: /article

response:
[
  {
    "ID"        : "",
    "img"       : "",
    "Title"     : "",
    "Content"   : "",
    "markdown"  : ""
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
    "ID"        : "",
    "img"       : "",
    "Title"     : "",
    "Content"   : "",
    "markdown"  : ""
}
```
### Menambahkan article
```
POST: /article

data:
{
    "img"       : "",
    "Title"     : "",
    "Content"   : "",
    "markdown"  : ""
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
    "img"       : "",
    "Title"     : "",
    "Content"   : "",
    "markdown"  : ""
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
![Design Database](https://raw.githubusercontent.com/jordanbramada/JordanTekweb2022/main/img/designdbdesign.png)
