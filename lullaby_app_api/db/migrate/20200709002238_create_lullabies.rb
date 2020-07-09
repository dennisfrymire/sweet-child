class CreateLullabies < ActiveRecord::Migration[6.0]
  def change
    create_table :lullabies do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :lyrics
      t.string :image
      t.string :vid_link

      t.timestamps
    end
  end
end
