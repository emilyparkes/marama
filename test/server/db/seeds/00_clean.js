exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('grants_study_junction')()
    .then(empty('location_study_junction'))
    .then(empty('types_jobs_junction'))
    .then(empty('types_study_junction'))
    .then(empty('interests_to_types_junction'))
    .then(empty('location'))
    .then(empty('pasifika_grants'))
    .then(empty('iwi_grants'))
    .then(empty('grants'))
    .then(empty('help'))
    .then(empty('study'))
    .then(empty('jobs'))
    .then(empty('interest_types'))
    .then(empty('interests'))
}
