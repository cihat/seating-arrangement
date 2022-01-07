class BaseService {
  constructor(model) {
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  async save(objects) {
    return await this.model.insertMany(objects)
  }

  async load() {
    return this.model.find({})
  }

  async insert(object) {
    return await this.model.create(object)
  }

  async removeBy(property, value) {
    return this.model.deleteOne({ [property]: value })
  }

  async removeAll(options) {
    return this.model.deleteMany(options)
  }

  async update(id, object) {
    return await this.model.findByIdAndUpdate(id, object)
  }

  async find(id) {
    return await this.model.findById(id)
  }

  async findBy(property, value) {
    return this.model.findById({ [property]: value })
  }

  async findAll() {
    return this.model.find()
  }

  async findOne(property, value) {
    return this.model.findOne({ [property]: value })
  }
}

module.exports = BaseService
