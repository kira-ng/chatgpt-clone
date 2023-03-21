interface Message {
  text: string
  createAt: admin.firebase.Timestamp
  user: {
    _id: string
    name: string
    avatar: string
  }
}
