import React from 'react';
import Image from 'next/image';

export default function Service() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex flex-col justify-center items-center w-full gap-2 py-36'>
        <h1 className='text-5xl text-blue-900 font-bold uppercase'>
          Our Service
        </h1>
        <p className='text-lg opacity-70'>
          Customer satisfaction is a priority
        </p>
      </div>

      <div className='flex flex-col justify-center items-center w-full gap-y-44'>
        {/* service */}
        <div className='flex flex-col justify-start items-start w-full'>
          <div className='flex w-full px-36'>
            <div className='flex flex-1 justify-start items-start'>
              <Image
                src='/assets/images/annie-spratt-5TfCI4nj6B4-unsplash.jpg'
                alt='image'
                className='shadow-2xl rounded-xl'
                width='500'
                height='500'
              />
            </div>
            <div className='flex flex-1 flex-col justify-start gap-y-6 px-8'>
              <div className='flex flex-col justify-start items-start gap-y-2'>
                <h1 className='text-blue-950 font-bold text-4xl'>
                  Easier Pick-up 🚚
                </h1>
                <p className='text-blue-950 font-normal text-xl'>
                  Pick Me Laundry provides a direct pick-up service for clothes
                  from the location specified by the customer. The Pick Me
                  Laundry collection team will come according to the schedule
                  chosen by the customer. Pickups are done quickly and
                  efficiently, freeing customers from the hassle of bringing
                  their clothes to the laundry.
                </p>
              </div>
              <div className='flex flex-col justify-start items-start'>
                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/clock.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Efficient: Quick and hassle-free pick-up process for
                    customers.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/rocket.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Flexible: Customizable clothing pick-up according to
                    customer's schedule and preferences.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/woman.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Professional: Experienced and reliable picking team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* service */}
        <div className='flex flex-col justify-start items-start w-full'>
          <div className='flex flex-row-reverse w-full px-36'>
            <div className='flex flex-1 justify-start items-start'>
              <Image
                src='/assets/images/jeremy-sallee-lgrM1t4rxWQ-unsplash.jpg'
                alt='image'
                className='shadow-2xl rounded-xl'
                width='500'
                height='500'
              />
            </div>
            <div className='flex flex-1 flex-col justify-start gap-y-6 px-8'>
              <div className='flex flex-col justify-start items-start gap-y-2'>
                <h1 className='text-blue-950 font-bold text-4xl'>
                  Fast Laundry Process⚡
                </h1>
                <p className='text-blue-950 font-normal text-xl'>
                  After the clothes are picked up, Pick Me Laundry will carry
                  out the washing process carefully and professionally. Clothing
                  will be sorted by type, color, and specific instructions from
                  the customer. Then, the clothes will be washed using the best
                  methods and safe cleaning agents to keep the fabrics clean and
                  soft.
                </p>
              </div>
              <div className='flex flex-col justify-start items-start'>
                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/wash-machine.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    High quality: Washed with high quality standards to keep
                    clothes clean and soft.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/iron.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Special care: Treatment that takes into account the special
                    instructions and special needs of each type of clothing.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/clothes.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Maximum cleanliness: Use of safe and effective cleaning
                    agents to remove dirt and stains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* service */}
        <div className='flex flex-col justify-start items-start w-full'>
          <div className='flex w-full px-36'>
            <div className='flex flex-1 justify-start items-start'>
              <Image
                src='/assets/images/rowan-freeman-clYlmCaQbzY-unsplash.jpg'
                alt='image'
                className='shadow-2xl rounded-xl'
                width='500'
                height='500'
              />
            </div>
            <div className='flex flex-1 flex-col justify-start gap-y-6 px-8'>
              <div className='flex flex-col justify-start items-start gap-y-2'>
                <h1 className='text-blue-950 font-bold text-4xl'>
                  Delivery on Schedule ⏱️
                </h1>
                <p className='text-blue-950 font-normal text-xl'>
                  After the washing and care process is complete, Pick Me
                  Laundry will deliver the clothes back to the address specified
                  by the customer. Delivery is carried out according to the
                  schedule chosen by the customer, ensuring the reliability and
                  accuracy of delivery times. Clothing will be packaged properly
                  to maintain cleanliness and prevent damage during shipping.
                </p>
              </div>
              <div className='flex flex-col justify-start items-start'>
                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/lock.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Security: Safe packaging to maintain cleanliness and quality
                    of clothing during delivery.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/time.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    On time: Accurate delivery of clothes according to a
                    predetermined schedule.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/target.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Convenience: Clothing is delivered directly to the
                    customer's address without the hassle of picking it up
                    yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* service */}
        <div className='flex flex-col justify-start items-start w-full'>
          <div className='flex flex-row-reverse w-full px-36'>
            <div className='flex flex-1 justify-start items-start'>
              <Image
                src='/assets/images/rifath-photoripey-OApHds2yEGQ-unsplash.jpg'
                alt='image'
                className='shadow-2xl rounded-xl'
                width='500'
                height='500'
              />
            </div>
            <div className='flex flex-1 flex-col justify-start gap-y-6 px-8'>
              <div className='flex flex-col justify-start items-start gap-y-2'>
                <h1 className='text-blue-950 font-bold text-4xl'>
                  Special Offer 💯
                </h1>
                <p className='text-blue-950 font-normal text-xl'>
                  Pick Me Laundry provides various kinds of promos and special
                  offers to customers as a form of appreciation and incentives.
                  These promotions can be in the form of price discounts,
                  special laundry packages, or additional prizes. Customers can
                  take advantage of this promo to get added value and more
                  benefits from the Pick Me Laundry service.
                </p>
              </div>
              <div className='flex flex-col justify-start items-start'>
                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/discount.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Special: Specially designed promos to provide additional
                    benefits to customers.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/economic.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Economical: Price offers or packages that provide economic
                    value to customers.
                  </p>
                </div>

                <div className='flex justify-center items-center'>
                  <Image
                    src='/assets/images/gift.svg'
                    width='100'
                    height='100'
                    alt='image'
                  />
                  <p className='text-md text-blue-950 font-medium'>
                    Surprises: Additional prizes or bonuses that make the
                    laundry experience even more enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className='w-1/4 border border-blue-950/20 mt-16'></span>
    </div>
  );
}
