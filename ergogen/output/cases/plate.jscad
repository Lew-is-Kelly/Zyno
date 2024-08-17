function case_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[56.0978591,-66.7364658],[34.6109563,-67.486805]]).appendPoint([37.9264086,-162.4289336]).appendPoint([58.4139206,-161.713494]).appendPoint([61.3391795,-159.7540725]).appendPoint([77.3391795,-159.7540725]).appendPoint([80.0891795,-157.7540725]).appendPoint([96.0891795,-157.7540725]).appendPoint([98.8391795,-155.7540724]).appendPoint([114.8391795,-155.7540724]).appendPoint([117.5891795,-157.7540724]).appendPoint([131.8391795,-157.7540724]).appendPoint([130.5576207,-169.3565948]).appendPoint([152.4664227,-171.2286811]).appendPoint([168.2267186,-174.9167739]).appendPoint([188.5783155,-186.6667739]).appendPoint([203.8283155,-160.2529991]).appendPoint([191.7039599,-153.2529991]).appendPoint([199.289501,-125.906445]).appendPoint([179.2465401,-120.5359499]).appendPoint([178.8391795,-118.0040724]).appendPoint([178.8391795,-64.7540724]).appendPoint([136.3391795,-64.7540724]).appendPoint([133.5891795,-62.7540724]).appendPoint([117.5891795,-62.7540724]).appendPoint([114.8391795,-60.7540724]).appendPoint([98.8391795,-60.7540724]).appendPoint([96.0891795,-62.7540725]).appendPoint([80.0891795,-62.7540725]).appendPoint([77.3391795,-64.7540725]).appendPoint([61.3391795,-64.7540725]).appendPoint([56.0978591,-66.7364658]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = case_left_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        