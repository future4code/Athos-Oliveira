public async getUserById(id: string) {
    const user = await this.userDatabase.getUserById(id);

    if (!user) {
      throw new CustomError(404, "User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    };
  }
  // Mocks desenvolvidos no coding together da aula!

describe("getUserById", () => {
	// (a)
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.getUserById("abc")
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
    
	// (b)
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id)
      )
        
      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error) {
      console.log(error.message)
    }
  })
})

public async getAllUsers(role: USER_ROLES) {
      if (stringToUserRole(role) !== USER_ROLES.ADMIN) {
         throw new CustomError(401, "You must be an admin to access this endpoint"
        );
      }
      const users = await this.userDatabase.getAllUsers();
  
      return users.map((user) => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      }));
   }
   
   describe("getAllUsers", () => {
		// a
    test("Should catch error when role is not ADMIN", async () => {
      expect.assertions(2)
      
      try {
        await userBusinessMock.getAllUsers(USER_ROLES.NORMAL)
      } catch (error) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("You must be an admin to access this endpoint")
      }
    })

		// b
    test("Should return all users when authorized", async () => {
      expect.assertions(3)
      
      try {
        const getAllUsers = jest.fn(
          (role: USER_ROLES) => userBusinessMock.getAllUsers(role)
        )

        const result = await getAllUsers(USER_ROLES.ADMIN)

        expect(getAllUsers).toHaveBeenCalledWith(USER_ROLES.ADMIN)
        expect(result).toContainEqual({
          id: "id_mock_admin",
          name: "astrodev",
          email: "astrodev@gmail.com",
          role: "ADMIN",
        })
        expect(result).toContainEqual({
          id: "id_mock_normal",
          name: "bananinha",
          email: "bananinha@gmail.com",
          role: "NORMAL",
        })
      } catch (error) {
        console.log(error.message)
      }
    })
})