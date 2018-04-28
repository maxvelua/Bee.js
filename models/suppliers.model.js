module.exports = (sequelize, DataTypes) => {
    const BeeSuppliers = sequelize.define('bee_suppliers', {
        suppliers_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // field: 'suppliers_id'
        },
        name: {
            type: DataTypes.TEXT,
            field: 'name',
            required: true
        },
        address: {
            type: DataTypes.TEXT,
            field: 'address',
            required: true
        },
        phone_numbers: {
            type: DataTypes.TEXT,
            field: 'phone_numbers',
            required: true
        },
        contacts: {
            type: DataTypes.TEXT,
            field: 'contacts',
            required: true
        },
        legal: {
            type: DataTypes.ENUM,
            values: ['LLC', 'LP', 'LLP', 'LLLP', 'SP', 'Trust', 'JVAss', 'Mun', 'NP Corp'],
            required: true
        },
        sup: {
            type: DataTypes.ENUM,
            values: ['Location', 'Queen', 'Beehive', 'Box', 'Sensor', 'Pallet', 'Colony', 'Transportation'],
            required: true
        }
    });

    BeeSuppliers.associate = models => {

    };

    return BeeSuppliers;
};