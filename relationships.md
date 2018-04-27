// Auction website

one to one => person : spouse | user : profile

one to many => auction : bid | city : people.address

one to few => blogpost : comments

many to many => artists : songs


auction bids

seller

buyers

auction : products

auction = {
  products: [mongoose.Schema.Types.ObjectId]
}
product = {
  auctions: [auction]
}
sales

payments

Subdocument (embedded documnt)
References

profileSchema ={}

user = { // 1 to 1 with embedded document
  profile: profileSchema
}
OrderLineSchemas = {}
order = { // one to few with embedded array of documents
  lineItems: [OrderLineSchemas]
}

City = {
  
}
const ObjectId = mongoose.Schema.ObjectId;
Resident = {
  city: { type: ObjectId, ref: 'City' }
}
