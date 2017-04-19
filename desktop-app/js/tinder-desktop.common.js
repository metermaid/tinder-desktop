(function() {
  var module = angular.module('tinder-desktop.common', []);
  
  module.controller('MenuController', function($scope) {
    $scope.getCookie = function(cookieName) {
      return localStorage[cookieName];
    };
  });
  
  module.filter('distanceToUnits', function(Settings) {
    return function(distanceMi) {
      if (Settings.get('distanceUnits') == 'mi') {
        return distanceMi + ' mi';
      } else {
        return Math.round(distanceMi * 1.60934) + ' km';
      }
    };
  });

  module.filter('bdayToAge', function() {
    return function(bday) {
      return moment.duration(moment().diff(moment(bday))).years();
    };
  });

  module.filter('timeFromNow', function() {
    return function(time) {
      return moment(time).fromNow();
    };
  });

  module.filter('timeToLocalized', function () {
    return function(time) {
      return moment(time).format('L HH:mm');
    };
  });

  module.filter('getFortune', function () {
    return function (data) {
      var str = data.name + " " + data.birth_date;
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
         hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }

      var pn = (data.gender == '0' ? 'he' : 'she');
      var ps = (data.gender == '0' ? 'his' : 'her');
      var po = data.gender == '0' ? 'him' : 'her';
      var reasons = [
        pn + " ghosts you",
        pn + " owns the same twin bed from undergrad",
        pn + " does sketch comedy... Badly",
        pn + " won't take more than one train line to see you (sorry)",
        pn + " surprises you with a visit from " + ps + " parents",
        pn + " compares you to " + ps + " mother... Constantly",
        pn + " wears transition lenses",
        pn + " loads the dishwasher wrong",
        pn + " doesn't vote",
        "" + pn + "'s grossed out when you talk about poop",
        pn + " shook your hand and then told you " + pn + " was sick",
        pn + " texts on the subway stairs",
        pn + " gave you long stem red roses",
        pn + " drinks iced coffee in below freezing temperatures",
        pn + " wore voluminous hats to concerts",
        "you've never seen " + po + " without a hat on",
        pn + " attends SantaCON every year",
        "" + ps + " mom still buys all " + ps + " clothes for " + po + "",
        pn + " thinks Nickelback is underappreciated",
        pn + " lives in a different borough",
        pn + " lied about having a dog on tinder",
        pn + " sleeps on your side of the bed. It's yours!",
        pn + " acts like " + pn + "'s your teacher",
        pn + " expects you to convert to " + ps + " religion in the future",
        pn + " voted for Trump",
        pn + " says 'all lives matter'",
        "You're convinced " + pn + " forgets your name",
        pn + " acts like " + pn + "'s from New Jersey",
        pn + " gave you a pet name you hate",
        "" + pn + "'s a fan of sister wives",
        pn + " likes Woody Allen to an uncomfortable degree",
        pn + " watches exclusively reality TV shows",
        pn + " doesn't read books",
        pn + " tattoos your name to " + ps + " body after a few dates",
        "" + pn + "'s toxic and you're not slipping under",
        pn + " doesn't believe in the moon landing",
        pn + " never lets you choose the movie",
        "You're pretty sure that tiger in " + ps + " photo was drugged",
        pn + " wears exclusively v-necks",
        pn + " never wants to hang out with your friends",
        "you made more money than " + po + " and " + pn + " couldn't handle it",
        "Unable to commit... even when choosing an ice cream flavour",
        "you can't stand " + ps + " fashion sense",
        pn + " litters",
        "" + pn + "'s secretly a conspiracy theorist",
        pn + " gets a bad haircut and you'd rather break up with " + po + " than complain",
        pn + " just loves memes too much",
        "you find " + ps + " eating habits annoying",
        pn + " only does laundry at " + ps + " parents' house",
        "you can't change " + ps + " mind for any reason",
        pn + " reminds me of yourself too much",
        pn + " doesn't laugh at your jokes",
        "your parents like " + po + " too much",
        pn + " loves something you hate",
        pn + " leaves too many messages in your voicemail",
        pn + " exclusively responds to texts with phone calls",
        pn + " reminds you of an ex. The bad one.",
        "all " + pn + " talks about is vaping"
      ];

      var x = Math.sin(hash + 1) * 10000;
      var random = x - Math.floor(x);
      var result = Math.floor(random*reasons.length);

      return reasons[result];
    };

  });
})();
