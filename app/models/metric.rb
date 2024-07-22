class Metric < ApplicationRecord
  validates :timestamp, presence: true
  validates :name, presence: true
  validates :value, presence: true
end
