class User < ApplicationRecord
    has_secure_password
    has_one :party

    validates :password, length: { minimum:5 ,message: "must be at least 5 characters long"}
end
