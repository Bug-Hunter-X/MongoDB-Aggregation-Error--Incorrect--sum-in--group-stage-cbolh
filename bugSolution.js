```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {
    $match: {status: "A"}
  },
  {
    $group: {
      _id: "$category",
      total: {$sum: $value}
    }
  }
])
```