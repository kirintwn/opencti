import { assoc } from 'ramda';
import { batchLoadThroughGetTo, createEntity, listEntities, loadById } from '../database/middleware';
import { BUS_TOPICS } from '../config/conf';
import { notify } from '../database/redis';
import { ENTITY_TYPE_LOCATION_CITY, ENTITY_TYPE_LOCATION_COUNTRY } from '../schema/stixDomainObject';
import { RELATION_LOCATED_AT } from '../schema/stixCoreRelationship';
import { ABSTRACT_STIX_DOMAIN_OBJECT } from '../schema/general';

export const findById = (user, cityId) => {
  return loadById(user, cityId, ENTITY_TYPE_LOCATION_CITY);
};

export const findAll = (user, args) => {
  return listEntities(user, [ENTITY_TYPE_LOCATION_CITY], args);
};

export const batchCountry = async (user, cityIds) => {
  return batchLoadThroughGetTo(user, cityIds, RELATION_LOCATED_AT, ENTITY_TYPE_LOCATION_COUNTRY);
};

export const addCity = async (user, city) => {
  const created = await createEntity(
    user,
    assoc('x_opencti_location_type', ENTITY_TYPE_LOCATION_CITY, city),
    ENTITY_TYPE_LOCATION_CITY
  );
  return notify(BUS_TOPICS[ABSTRACT_STIX_DOMAIN_OBJECT].ADDED_TOPIC, created, user);
};
