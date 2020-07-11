# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Lullaby.create([
    { title: 'Moon River', artist: 'Frank Ocean', album: 'Someone Great', lyrics: 'https://www.azlyrics.com/lyrics/frankocean/moonriver.html', image: 'https://i.redd.it/xr0ushtud4h01.jpg', vid_link: 'https://www.youtube.com/watch?v=mXiFHDfvn4A'},
    { title: 'Blackbird', artist: 'The Beatles', album: 'The Beatles', lyrics: 'https://www.azlyrics.com/lyrics/beatles/blackbird.html', image: 'https://i1.sndcdn.com/artworks-000144929417-74n783-t500x500.jpg', vid_link: 'https://www.youtube.com/watch?v=Man4Xw8Xypo'},
    { title: 'A Bushel and a Peck', artist: 'Doris Day', album: 'Guys and Dolls', lyrics: 'https://www.azlyrics.com/lyrics/dorisday/abushelandapeck.html', image: 'https://m.media-amazon.com/images/I/813gltHpGEL._SS500_.jpg', vid_link: 'https://www.youtube.com/watch?v=YoVt12EyzKw'},
    { title: 'Mustang Sally', artist: 'Wilson Pickett', album: 'The Wicked Pickett' , lyrics: 'https://www.azlyrics.com/lyrics/wilsonpickett/mustangsally.html', image: 'https://playmoss.com/uploads/images/t/r/a/track_219043.jpg', vid_link: 'https://www.youtube.com/watch?v=16u6w0cjjrU'},
    { title: 'Joy to the World', artist: 'Three Dog Night', album: 'Naturally', lyrics: '', image: 'https://img.cdandlp.com/2016/07/imgL/118079721.jpg', vid_link: 'https://www.youtube.com/watch?v=Dp7KfG9AjaY'},
    { title: 'Where Your Eyes Don\'t Go', artist: 'They Might Be Giants', album: '', lyrics: 'https://www.azlyrics.com/lyrics/theymightbegiants/whereyoureyesdontgo.html', image: 'https://upload.wikimedia.org/wikipedia/en/3/3d/TheyMightBeGiants-ThenTheEarlierYears.jpg', vid_link: 'https://www.youtube.com/watch?v=Ro_u6AhcGYo'},
])

puts "Seeded database"
