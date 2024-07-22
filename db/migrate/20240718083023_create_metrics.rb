class CreateMetrics < ActiveRecord::Migration[6.1]
  def change
    create_table :metrics do |t|
      t.datetime :timestamp
      t.string :name
      t.float :value

      t.timestamps
    end
  end
end
