exports.formatUsersData = (usersData) => {
    if (usersData === undefined) return [];
    return usersData.map((c) => {
      return [c.name, c.email, c.password];
    });
  };