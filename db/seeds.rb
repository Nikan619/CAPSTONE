# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'abc', password: '123')



Party.create(affiliation: 'Democrat',image: "https://static.wixstatic.com/media/93e399_5c8b613039094607a232328c81e3b991~mv2.jpg/v1/fill/w_640,h_596,al_c,lg_1,q_85,enc_auto/93e399_5c8b613039094607a232328c81e3b991~mv2.jpg");
Party.create(affiliation: 'Republican',image: "https://1000logos.net/wp-content/uploads/2017/06/Republican-Logo-1874.png")