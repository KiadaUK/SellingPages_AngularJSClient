'use strict';

sellingPages.service('userDataService', function()
    {
        var Id;
        var facebookId;
        var fullName;
        var facebookUsername;
        var User;

        return{
           setUser: function(user)
           {
                 Id = user.Id,
                 facebookId = user.FacebookId,
                 fullName = user.Name,
                 facebookUsername = user.FacebookUsername

               User = {
                   "Id" : Id,
                   "FacebookId" : facebookId,
                   "Name" : fullName,
                   "FacebookUsername" : facebookUsername
               };

           },

           getUser: function()
           {
               return User;
           },

            getUserId: function()
            {
                return Id
            },

            getFacebookId: function()
            {
                return facebookId
            },

            getName: function()
            {
                return fullName
            },

            getFacebookUsername: function()
            {
                return facebookUsername
            }

        } ;
    })