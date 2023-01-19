class CreateParties < ActiveRecord::Migration[6.1]
  def change
    create_table :parties do |t|
      t.string :affiliation
      t.string :image
      t.belongs_to :user

      t.timestamps
    end
  end
end
