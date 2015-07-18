angular.module('starter.services', [])

.factory('Contacts', function($http) {
  // Might use a resource here that returns a JSON array

  var contacts = [{"Company Name":"Dirk's Demolition","Scope of Work":"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"Dirk's Demolition","Scope of Work":"Demolition","Role":"Subcontractor","Contact":"Dirk Jones","City":"Minneapolis","State":"MN","Work Phone":"652.555.8520","Mobile Phone":"","Fax":"","Email":"itunifiermessages@mortenson.com"},{"Company Name":"Electric Works","Scope of Work":"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"Electric Works","Scope of Work":"Electrical","Role":"Subcontractor","Contact":"Bolt Thomas","City":"Minneapolis","State":"MN","Work Phone":"952.555.4114","Mobile Phone":"652.555.9546","Fax":"952.555.4329","Email":"itunifiermessages@mortenson.com"},{"Company Name":"Gordon Engineers","Scope of Work":"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"Gordon Engineers","Scope of Work":"Engineering","Role":"Designer","Contact":"Mike Gordon","City":"Wayzata","State":"MN","Work Phone":"652.555.8520","Mobile Phone":"","Fax":"","Email":"itunifiermessages@mortenson.com"},{"Company Name":"Mortenson Construction","Scope of Work":"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"Mortenson Construction","Scope of Work":"General","Role":"General Contractor","Contact":"Alan Barber","City":"Golden Valley","State":"MN","Work Phone":"763.287.0001","Mobile Phone":"952.555.1234","Fax":"","Email":"itunifiermessages@mortenson.com"},{"Company Name":"Mortenson Construction","Scope of Work":"General","Role":"General Contractor","Contact":"Scott Hale","City":"Golden Valley","State":"MN","Work Phone":"763.287.0000","Mobile Phone":"952.555.1234","Fax":"","Email":"dylan.warzenski@mortenson.com"},{"Company Name":"Precast Pros","Scope of Work":"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"Precast Pros","Scope of Work":"Precast Concrete","Role":"Subcontractor","Contact":"Pete Polletti","City":"Excelsior","State":"MN","Work Phone":"652.555.8520","Mobile Phone":"","Fax":"","Email":"itunifiermessages@mortenson.com"},{"Company Name":"Rainbow Paint and Wallcovering","Scope of Work":"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"Rainbow Paint and Wallcovering","Scope of Work":"Paint","Role":"Subcontractor","Contact":"Bob Green","City":"Green Bay","State":"WI","Work Phone":"652.555.8520","Mobile Phone":"","Fax":"","Email":"itunifiermessages@mortenson.com"},{"Company Name":"Silva Enterprises","Scope of Work":"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"Silva Enterprises","Scope of Work":"Customer","Role":"Customer","Contact":"Diana Silva","City":"St Paul","State":"MN","Work Phone":"652.555.8520","Mobile Phone":"","Fax":"","Email":"itunifiermessages@mortenson.com"},{"Company Name":"\"Super Steel","Scope of Work":"Inc.\"","Role":"","Contact":"","City":"","State":"","Work Phone":"","Mobile Phone":"","Fax":"","Email":""},{"Company Name":"\"Super Steel","Scope of Work":"Inc.\"","Role":"Steel","Contact":"Subcontractor","City":"Sam West","State":"Minneapolis","Work Phone":"MN","Mobile Phone":"652.555.8520","Fax":"","Email":""}];
    	

  return {
    all: function() {
    	return contacts;
    },
    get: function(chatId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === parseInt(chatId)) {
          return contacts[i];
        }
      }
      return null;
    }
  };
});
